const Manager = require("../lib/Manager");

const generateSite = (team) => {
    console.log(team);
    //generate an empty array to push html elements to loop through employee
    const html = [];
    //generate functions for each employee tpyes- returns html data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${manager.name} <br/>
                {/* find font awesome icon to go here */}
                <ul class= "list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>   
                </ul>
            </div>
        </div>
        `;
        html.push(managerHtml);
    }
    
}