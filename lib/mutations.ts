import fetcher from './fetcher';

export const auth = (mode: 'singin' | 'singup', body: { email: string, password: string }) => {
  return fetcher(`/${mode}`, body)
}