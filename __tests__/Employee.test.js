const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Employee.js');

test('creates a valid Employee object', () => {
    const empl = new Employee('Dave Jones', '12345', 'Dave.Jones@company.com');

    expect(empl).toHaveProperty('name');
    expect(empl).toHaveProperty('id');
    expect(empl).toHaveProperty('email');
    expect(empl).toHaveProperty('role');
    expect(empl.name).toBe('Dave Jones');
    expect(empl.id.length).toBeGreaterThan(0);
    expect(empl.email.length).toBeGreaterThan(0);
    expect(empl.role).toBe('Employee')
});

test("gets employee's name value", () => {
    const empl = new Employee('Dave Jones');
    const empl2 = new Employee();

    expect(empl.getName()).toBe('Dave Jones');
    expect(empl2.getName()).toBeFalsy();
});

test("gets employee's id value", () => {
    const empl = new Employee('Dave Jones', '12345');
    const empl2 = new Employee('Dave Jones');

    expect(empl.getId()).toBe('12345');
    expect(empl2.getId()).toBeFalsy();
});

test("gets employee's email value", () => {
    const empl = new Employee('Dave Jones', '12345', 'dave.jones@company.com');
    const empl2 = new Employee('Dave Jones', '12345');

    expect(empl.getEmail()).toBe('dave.jones@company.com');
    expect(empl2.getEmail()).toBeFalsy();
});

test("gets employee's role value", () => {
    const empl = new Employee('Dave Jones', '12345', 'dave.jones@company.com');
    const empl2 = new Employee();
    
    expect(empl.getRole()).toBe('Employee');
    expect(empl2.getRole()).toBe('Employee');
});
