import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function CalPopup({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery' });
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#292929' },
          dark: { 'cal-brand': '#fafafa' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })().catch((error) => {
      console.error('Failed to initialize Cal.com:', error);
    });
  }, []);
  return (
    <Button
      data-cal-namespace="discovery"
      data-cal-link="martylouis/discovery"
      data-cal-config='{"layout":"month_view"}'
      {...props}
    >
      {children}
    </Button>
  );
}
