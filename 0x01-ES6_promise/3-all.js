import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const { body, firstName, lastName } = Object.assign(...response);
      console.log(body, firstName, lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
