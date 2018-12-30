### Actors

|Name|Type|
|----|----|
|Restaurant|External System|
|Kitchen|External System|
|Bar|External System|
|Customer|The user of the system|
|Receptionist|Aggregate|
|Waiter|Aggregate|
|Cashier|Aggregate|

### Event Only Flow

Reservation Made
Reservation Confirmed
Customer Entered Restaurant
Customer assigned table

### Reservation flow

##### Flow from customer perspective 

Here the Customer is the User and experiences the restaurant as a whole indistinguishable system. **Tx** is the day for which the customer is making the reservation.

|Actor|Time  |Command|Entity| Event|
|-----|------|------|------|------|
|Customer|T1|Make Reservation|Restaurant|Reservation Failed|
|Customer|T1|Make Reservation|Restaurant|Reservation Made|
|Reservation Policy|Tx -3|Confirm Reservation|Restaurant|Reservation Confirmed|

##### Flow inside restaurant

|Actor|Time  |Command|Entity| Event|
|-----|------|------|------|------|
|Customer|T1|Make Reservation|Receptionist|Reservation Made|
|Reservation Policy|Tx-3|Confirm Reservation|Receptionist|Reservation Confirmed|
|Reservation Policy|Tx-1|Distribute Tables|Receptionist|Tables assigned|

##### Table Projection

|Event|Read Model|
|-----|----------|
|Tables assigned|Customer table setup for the day|

    
###Restaurant flow

|Actor|Time|Command|Entity|Event|
|-----|----|-------|------|-----|
|User|T1|Enter restaurant|**Customer** (Action on customer?)|Customer Entered Restaurant|
|Restaurant Policy|T2|[Receive Customer](#Receive Customer flow)|Receptionist| Customer seated| 
|Restaurant Policy|T3|Take Order|Waiter| Customer order taken| 



###Receive Customer flow

|Actor|Time|Command|Entity|Event|
|-----|----|-------|------|-----|
|Restaurant Policy|T2|Receive Customer|Receptionist| Customer identified| 
|Receptionist Policy|T2+1|Find table|Receptionist| Customer Table Found| 
|Receptionist Policy|T2+1|Take Jackets|Receptionist| Customer Jackets received| 
|Receptionist Policy|T2+1|Bring Customer to Table|Receptionist| Customer seated| 


###Take Order flow

|Actor|Time|Command|Entity|Event|
|-----|----|-------|------|-----|
|Restaurant Policy|T3|Take Order|Waiter| Menu Presented to Customer|
|Waiter Policy|T3|Take Aperitif|Waiter| Drink order taken| 
|Waiter Policy|T4|Prepare Drinks| Bar | Drink order placed|
|Waiter Policy|T3 + 5 min|Take Dinner Order | Waiter | Dinner order taken |
|Waiter Policy|T5|Pass Dinner order to kitchen | Waiter | Food order Placed |

**Waiter can serve multiple tables. Asynchronous system.**

## Restaurant Policies

###Waiter Policy

|When |Command|Entity|Event|
|-----|-------|-------|------|-----|
|Menu Presented to Customer|Take Aperitif Order|Waiter|Drink order taken|
|Drink order taken|Place Drink Order|Waiter|Drinks order placed|
|T3 + 5 min|Take Dinner Order|Waiter|Dinner Order Taken
|Dinner order taken|Place Dinner Order|Waiter|Dinner order placed|

###Bar Policy

|When |Command|Entity|Event|
|-----|-------|-------|------|-----|
|Drink order placed|Prepare Drinks|Bar|Drinks ready|

###Kitchen Policy

|When |Command|Entity|Event|
|-----|-------|-------|------|-----|
|Dinner order placed|Make Dinner Order preparations| Kitchen | Dinner order received|
|Dinner order received|Make First Dish| Kitchen | Dish ready|
|Dish finished|Prepare next Dish| Kitchen | Dish ready|

###Billing Policy

|When |Command|Entity|Event|
|-----|-------|-------|------|-----|
|Drinks order placed|Register Drinks|Cashier|Drinks registered|
|Dish order placed|Register Dish|Cashier|Dish registered|

/////

| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
|Waiter| Clean Dish| Dish removed from table| 
| Cook   | Prepare Dish | Dish Ready |
| Waiter | Serve Dish | Dish Served |
| Customer | Eat  | Dish eaten|
| Waiter | Bring check| Check delivered |
| Customer| pay check| Food Payed|
| Customer| leave | Customer left |


