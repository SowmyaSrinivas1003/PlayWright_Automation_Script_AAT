/*
Employee Table
S.No    Name    Base Salary     Experience (Years)  Year-End Rating (Out of 5)
 1      Alice
        Johnson     75000.0             5.1                 4.2
 2     Bob Smith    68000.0             3.2                 3.8
 3     Carol Davis  82000.0             7.1                 4.5
 4     David Brown  90000.0             10.2                2.5
 5     Eva Green    60000.0             2.4                 3.5


Hike
Rating        % of base Salary as variable pay      Bonus
> =4.0              15.0                            1500
>=3 && < 4          10.0                            1200
< 3.0               3.0                             300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .

*/

let employeeData=[
    {
        name :"Alice Johnson",
        baseSalary:75000,
        experience:5.1,
        rating :4.2

    },
    {
       name :"Bob Smith",
        baseSalary:68000,
        experience:3.2,
        rating :3.8 
    },
     {
        name :"Carol Davis",
        baseSalary:82000,
        experience:7.1,
        rating :4.5
    },
     {
        name :"David Brown",
        baseSalary:90000,
        experience:10.2,
        rating :2.5
    },
      {
        name :"Eva Green",
        baseSalary:60000,
        experience:2.4,
        rating :3.5
    }
    
]

let empHikeDetails:Map<String , number>= new Map();
let hikePercentage:number;
let hikeAmount : number;
for(let employee of employeeData){

    if(employee.rating >=4){

        hikeAmount=(employee.baseSalary*15)+1500;
        
        if(employee.experience>=5){
            hikeAmount=hikeAmount+5000;
        }

        
        hikePercentage=hikeAmount/employee.baseSalary;
        empHikeDetails.set(employee.name ,hikePercentage);
        //console.log(`${employee.name} hike is : ${hikePercentage}`)

}else if(employee.rating>=3 && employee.rating<4){
    hikeAmount=(employee.baseSalary*10)+1200;
        
        if(employee.experience>=5){
            hikeAmount=hikeAmount+5000;
        }

        hikePercentage=hikeAmount/employee.baseSalary;
        empHikeDetails.set(employee.name ,hikePercentage);
}else if(employee.rating<3){
    hikeAmount=(employee.baseSalary*3)+300;
        
        if(employee.experience>=5){
            hikeAmount=hikeAmount+5000;
        }

        hikePercentage=hikeAmount/employee.baseSalary;
        empHikeDetails.set(employee.name ,hikePercentage);
}

}
console.log(empHikeDetails);

/*
OUTPUT:
Map(5) {
  'Alice Johnson' => 15.086666666666666,
  'Bob Smith' => 10.01764705882353,
  'Carol Davis' => 15.079268292682928,
  'David Brown' => 3.0588888888888888,
  'Eva Green' => 10.02
}

*/

