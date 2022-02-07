import MockAdapter from 'axios-mock-adapter';

const randomData = [
  'I am a genius!',
  'I am a rock star',
  'I am a super star',
  'I am a lover boy',
  'I am intelligent',
  'ok',
  'running out of adjectives...',
  'what else is there',
  'bye for now',
  'gracias!',
];

const pickRandomStr = () => {
  return randomData[Math.floor(Math.random() * 10)];
}

export const setupMocking = (axiosInstance) => {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet('/data').reply(200, pickRandomStr());

  mock.onPost('/data').reply(201, [
    {
      message: 'Everything went well'
    }
  ]);
}