const Engineer = require('../lib/Engineer.js');

test('creates a valid Engineer object', () => {
    const engnr = new Engineer('Dave Jones', '12345', 'Dave.Jones@company.com', "dJonesGitHub");

    expect(engnr).toHaveProperty('name');
    expect(engnr).toHaveProperty('id');
    expect(engnr).toHaveProperty('email');
    expect(engnr).toHaveProperty('role');
    expect(engnr).toHaveProperty('github');
    expect(engnr.name).toBe('Dave Jones');
    expect(engnr.id.length).toBeGreaterThan(0);
    expect(engnr.email.length).toBeGreaterThan(0);
    expect(engnr.github.length).toBeGreaterThan(0);
    expect(engnr.getRole()).toBe('Engineer');
    expect(engnr.getGithub()).toHaveProperty('github','dJonesGitHub');
});

