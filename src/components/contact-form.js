import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ArrowRight } from 'react-feather';

const ContactForm = () => {
  const [serverState, sendToFormspree] = useFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  );

  const {
    register,
    handleSubmit,
    errors: clientErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const errors = mergeErrors(serverState.errors, clientErrors);

  const setInputClassName = (error) => {
    const classes = classnames({
      'p-2 border rounded-sm outline-none shadow-sm transform transition-all focus:border-gray-900 focus:shadow-md': true,
      'border-gray-200': !error,
      'bg-red-50 border-red-400': error,
    });

    return classes;
  };

  if (serverState.succeeded) {
    return <div>Success!!</div>;
  }

  return (
    <form onSubmit={handleSubmit(sendToFormspree)}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <Label htmlFor="firstName" errors={errors.firstName?.message}>
            First Name*
          </Label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={setInputClassName(errors.firstName)}
            ref={register}
            aria-required="true"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="lastName" errors={errors.lastName?.message}>
            Last Name*
          </Label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={setInputClassName(errors.lastName)}
            ref={register}
            aria-required="true"
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="email" errors={errors.email?.message}>
            Email Address*
          </Label>
          <input
            aria-required="true"
            ref={register}
            type="email"
            name="email"
            id="email"
            className={setInputClassName(errors.email)}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <Label htmlFor="message" errors={errors.message?.message}>
            Message*
          </Label>
          <textarea
            aria-required="true"
            ref={register}
            name="message"
            id="message"
            rows="5"
            className={setInputClassName(errors.message)}
          ></textarea>
        </div>
        <div className="md:col-span-2 md:flex">
          <SubmitButton
            errors={Object.keys(clientErrors).length}
            submitting={serverState.submitting}
          />
        </div>
        {errors.undefined && (
          <ErrorMessage message={errors.undefined.message} />
        )}
        <input type="text" name="_gotcha" className="hidden" />
      </div>
    </form>
  );
};

export default ContactForm;

const errorMessage = {
  required: ' is a required field',
  validEmail: ' must be valid',
  min: ' must be at least ${min} characters',
  max: ' must be no more than ${max} characters',
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, errorMessage.min)
    .required(errorMessage.required),
  lastName: yup
    .string()
    .min(2, errorMessage.min)
    .required(errorMessage.required),
  email: yup
    .string()
    .email(errorMessage.validEmail)
    .required(errorMessage.required),
  message: yup
    .string()
    .min(10, errorMessage.min)
    .max(250, errorMessage.max)
    .required(errorMessage.required),
});

const mergeErrors = (formspreeErrors, otherErrors = {}) => {
  // merge server side errors into react-hook-form errors
  return {
    ...formspreeErrors.reduce(
      (acc, cur) => ({
        [cur.field]: { message: (cur.field ? 'This ' : '') + cur.message },
        ...acc,
      }),
      {}
    ),
    ...otherErrors,
  };
};

const Label = ({ htmlFor, errors = '', children, ...otherProps }) => {
  const hasErrors = errors.length;

  return (
    <label
      htmlFor={htmlFor}
      className={classnames({
        'text-sm transform-all mb-1 font-medium': true,
        'text-red-500 font-bold': hasErrors,
      })}
      {...otherProps}
    >
      {children}
      {hasErrors ? <ErrorMessage message={errors} /> : ''}
    </label>
  );
};

const ErrorMessage = ({ message = '' }) => (
  <span className="text-red-500">{message}</span>
);

const SubmitButton = ({ errors = '', submitting = false }) => (
  <button
    className={classnames({
      'px-8 py-3 flex items-center text-white border-0 transition-all rounded bg-gray-800 group': true,
      'bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:outline-none transform focus:shadow-xl hover:shadow-xl':
        !errors && !submitting,
      'opacity-30 cursor-not-allowed': errors,
    })}
    disabled={errors || submitting}
  >
    {submitting ? (
      <>Submitting...</>
    ) : (
      <>
        Send{' '}
        <ArrowRight
          className="ml-1 -mr-1 transition-all transform group-focus:translate-x-1 group-hover:translate-x-1"
          size={16}
        />
      </>
    )}
  </button>
);
