import md5 from 'md5';

export const gravatarURL = (email, size = 80) => {
  // size is image size in pixels
  const root = 'https://www.gravatar.com/avatar';
  const query = `s=${size}`; // size 150 px

  const hash = md5(email.toLowerCase());

  return `${root}/${hash}?${query}`
}
