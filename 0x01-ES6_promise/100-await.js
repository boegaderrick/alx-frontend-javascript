import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const results = await Promise.all([uploadPhoto(), createUser()])
    .catch(() => [null, null]);

  return { photo: results[0], user: results[1] };
}
