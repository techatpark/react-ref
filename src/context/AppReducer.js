export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            };
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };
        case 'EDIT_EMPLOYEE':
            const updatedEmployee = action.payload;

            const updatedEmployees = state.employees.map(employee => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }
                return employee;
            });

            return {
                ...state,
                employees: updatedEmployees
            };
        case 'ADD_DEPARTMENT':
            return {
                ...state,
                departments: [...state.departments, action.payload]
            };
        case 'EDIT_DEPARTMENT':
            const updatedDepartment = action.payload;

            const updatedDepartments = state.departments.map(department => {
                if (department.id === updatedDepartment.id) {
                    return updatedDepartment;
                }
                return department;
            });

            return {
                ...state,
                departments: updatedDepartments
            };
        case 'REMOVE_DEPARTMENT':
            return {
                ...state,
                departments: state.departments.filter(department => department.id !== action.payload)
            };
        default: return state;
    }
}