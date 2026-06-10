export const shouldSendOrderEmail = (location = window.location) => {
  const hostname = location.hostname || '';

  return !(
    hostname === 'localhost'
    || hostname === '127.0.0.1'
    || hostname === '::1'
    || hostname.startsWith('192.168.')
    || hostname.startsWith('10.')
    || hostname.endsWith('.local')
  );
};
