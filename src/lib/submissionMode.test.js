import { shouldSendOrderEmail } from './submissionMode';

test('does not send order emails from local development hosts', () => {
  expect(shouldSendOrderEmail({ hostname: 'localhost' })).toBe(false);
  expect(shouldSendOrderEmail({ hostname: '127.0.0.1' })).toBe(false);
  expect(shouldSendOrderEmail({ hostname: '192.168.0.55' })).toBe(false);
});

test('sends order emails from deployed hosts', () => {
  expect(shouldSendOrderEmail({ hostname: 'phoenixbeachvb.com' })).toBe(true);
});
