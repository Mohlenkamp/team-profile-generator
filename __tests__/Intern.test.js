const Intern = require('../lib/Intern.js');

test('creates a valid Intern object', () => {
    const intrn = new Intern('Dave Jones', '12345', 'Dave.Jones@company.com', "Whatsamatta U");

    expect(intrn).toHaveProperty('name');
    expect(intrn).toHaveProperty('id');
    expect(intrn).toHaveProperty('email');
    expect(intrn).toHaveProperty('role');
    expect(intrn).toHaveProperty('school');
    expect(intrn.name).toBe('Dave Jones');
    expect(intrn.id.length).toBeGreaterThan(0);
    expect(intrn.email.length).toBeGreaterThan(0);
    expect(intrn.school.length).toBeGreaterThan(0);
    expect(intrn.getRole()).toBe('Intern')
    expect(intrn.getSchool()).toHaveProperty('school','Whatsamatta U')
});