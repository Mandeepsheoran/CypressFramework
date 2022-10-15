class loginpage {

            getusername(){
                return cy.get('#mat-input-0');
            } 

            getpassword(){
                return cy.get('#mat-input-1');
            }

            getloginButton(){
                return cy.contains('LOGIN');
            }   
}


const login  = new loginpage()
export default login; 