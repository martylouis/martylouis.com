import { FileText } from 'react-feather';

export const utils = {
  // A property for applying width/height together
  sq: (config) => (value) => ({
    width: value,
    height: value,
  }),
  w: (config) => (value) => ({
    width: value,
  }),
  h: (config) => (value) => ({
    height: value,
  }),
  // margin shortahnd
  m: (config) => (value) => ({
    margin: value,
  }),
  mt: (config) => (value) => ({
    marginTop: value,
  }),
  mr: (config) => (value) => ({
    marginRight: value,
  }),
  mb: (config) => (value) => ({
    marginBottom: value,
  }),
  ml: (config) => (value) => ({
    marginLeft: value,
  }),
  mx: (config) => (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (config) => (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (config) => (value) => ({
    padding: value,
  }),
  pt: (config) => (value) => ({
    paddingTop: value,
  }),
  pr: (config) => (value) => ({
    paddingRight: value,
  }),
  pb: (config) => (value) => ({
    paddingBottom: value,
  }),
  pl: (config) => (value) => ({
    paddingLeft: value,
  }),
  px: (config) => (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (config) => (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  br: (config) => (value) => ({
    borderRadius: value,
  }),
};
