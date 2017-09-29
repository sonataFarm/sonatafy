import md5 from 'md5';

export const gravatarURL = email => {
  const root = 'https://www.gravatar.com/avatar';

  const hash = md5(email.toLowerCase());

  return `${root}/${hash}`
}
