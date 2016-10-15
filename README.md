## Task

### To run project on your local environment you have to do the following steps

1. Copy repo to your local machine:

  ```git clone https://github.com/agwisniewska/PiLabTest.git ```

2. Go to copied directory and install npm dependencies

  ``` npm install ```

3. Open new tab in your terminal and run MongoDB

   ``` mongod ```

4. Run application
  
  ``` npm start ```
 
5. Open browser and type localhost: 127.0.0.1:8080
 
### To run tests you have to do the following steps

1. Go to the directory and run application
 
 ``` npm start ```

2. Run Selenium Server. Open new tab in your terminal and type

  ```webdriver-manager start```

3. Open another tab in the terminal and type

  ```npm test ```


### To send POST request to app please use the following command

  ```
curl -H "Content-Type: application/json" -X POST -d '{"name": "accounts","class": "a","icon": "briefcase","title": "Account","titletext": "Set: Accounts","content": "Type: Deposit","additional": "Age: From 29 years to 80...","href": "/#/breadcrumbs/accounts","template": "You are on accounts page. Check console!"}' http://127.0.0.1:8080/api/breadcrumbs

```
  

 
    
