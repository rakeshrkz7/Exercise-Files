const reservations = require('./reservations');
const Reservation = require('./schema/reservation');

// promises
describe('validate using promise', () => {
  it('should resolve with no optional fields', () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username@example.com',
    });

    return reservations.validate(reservation)
      .then(value => expect(value).toEqual(reservation));
  });

  it('should reject with an invalid email', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });

    expect.assertions(1);

    return reservations.validate(reservation)
      .catch(error => expect(error).toBeInstanceOf(Error));
  });

  it('should reject with an invalid email', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });

    await expect(reservations.validate(reservation)).rejects.toBeInstanceOf(Error);
  });
});

// async await
describe('validate using async await', () => {
  it('should resolve with no optional fields', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username@example.com',
    });

    await expect(reservations.validate(reservation))
      .resolves.toEqual(reservation);
  });

  it('should reject with an invalid email', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });

    await expect(reservations.validate(reservation))
      .rejects.toBeInstanceOf(Error);
  });
});

