const Manager = require('../lib/Manager.js');


test('creates a valid Manager object', () => {
    const mgnr = new Manager('Dave Jones', '12345', 'Manager', 'Dave.Jones@company.com', "Office 222");

    expect(mgnr).toHaveProperty('name');
    expect(mgnr).toHaveProperty('id');
    expect(mgnr).toHaveProperty('email');
    expect(mgnr).toHaveProperty('role');
    expect(mgnr.name).toBe('Dave Jones');
    expect(mgnr.id.length).toBeGreaterThan(0);
    expect(mgnr.email.length).toBeGreaterThan(0);
    expect(mgnr.officeNumber.length).toBeGreaterThan(0);
    expect(mgnr.getRole()).toBe('Manager')
});