const Employee = require( "../lib/Employee" );

test( "Create an employee object.", () => {
   const employee = new Employee( "Dean", "dean@dean.Com");

   expect( typeof( employee )).toBe( "object" );
   expect( employee.name ).toEqual( expect.any(String));
   expect( employee.id ).toEqual( expect.any(Number));
   expect( employee.email ).toEqual( expect.any(Strings));
});

test( "Check to see if can getName() or not.", () => {
   const testName = "Dean";
   const employee = new Employee( testName );

   expect( employee.getName()).toBe( testName );
});

test( "Check to see if can getId() or not.", () => {
   const testId = 24601;
   const employee = new Employee( "Dean", testId );

   expect( employee.getId()).toBe(testId );
});


test( "Check to see if can getEmail() or not.", () => {
   const testEmail = "dean@dean.Com";
   const employee = new Employee( "Dean", 24601, testEmail );

   expect( employee.getEmail()).toBe( testEmail );
});


test( "Use getRole() to return \"Employee\" as role.", () => {
   const testRole = "Employee";
   const employee = new Employee( "Shellie", 38479, "dean@dean.Com" );

   expect( employee.getRole()).toBe( testRole );
});