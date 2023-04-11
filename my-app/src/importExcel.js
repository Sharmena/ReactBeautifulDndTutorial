//This should be able to import excel files so that they can be read through and create objects from
//type npm install read-excel-file if need be
// for now the function just prints to the command line until later use
import initialData from './initial-data';

function importExcel(major){

const xlsxFile = require('read-excel-file/node');

var semesterCount = 0;
var i = 0;
xlsxFile('./src/Requirements.xlsx', {sheet: major})
.then((rows) => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        
        if (cell!= null && cell.includes("Year")){
            //while listing column headers create semester set up
            semesterCount ++;

            initialData.columns = initialData.columns.concat({id: 'column-' + semesterCount, title:cell, taskIds: []})
            
            initialData.columnOrder = initialData.columnOrder.concat('column-' + semesterCount)


        } else {
            if (cell != null){
              if (cell.includes(",")){
                //if it has data validation create with drop down in semester i
                //cell.split(",");
                
              } 
                //create drag and drop object in semester i

                initialData.tasks = initialData.tasks.concat({id: cell, count: semesterCount});
                





              
                

            
                
            }
            

            //increment i so that obbjects are put in correct semester
            i++;
            //reset i at semester max so it goes back to beginning 
            if (i > semesterCount)
                i = 0;
        }
        
        
        //console.log(cell);
      });
    });
  }); 
}

importExcel('Engineering');
console.log(initialData.columns);
/*cases for later use

var major;
//Should be value of dropdown
var dropdownValue = document.getElementByID("myDropdown");
console.log(dropdownValue.options[dropdownValue.selectedIndex].text);


switch(dropdownValue){
  case 'COMSC BA':
    major = 'Computer Science BA';
  case 'COMSC BS':
    major = 'Computer Science BS';
  case 'ENGR': 
    major = 'Engineering'
  case 'CM':
    major = 'Construction Management'
}

importExcel(major);

*/



export default importExcel;

