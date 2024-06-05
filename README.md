
# Nature Saviors  Web Application




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_RAZORPAY_ID`

`RAZORPAY_SECRET`

The abovet two variables can be obtained from razorpay website by registering, from the api key section of the website you can get the razorpay id and razorpay secret .

`NEXT_PUBLIC_URL`

example NEXT_PUBLIC_URL=http://localhost:3000

`NEXT_PUBLIC_NEWSAPI_URL`

ex:NEXT_PUBLIC_NEWSAPI_URL=https://newsapi.org/v2/everything?q=apple&from=2024-06-03&to=2024-06-03&sortBy=popularity&apiKey={apikey}

The above api key can be obtained from news api website .


The above variables should be declared and initialized in 

`.env.local` file





## Deployment


You also need to setup mongodb compass in app in your desktop and should be connected to the localhost before deploying the project . 



After setting up the `.env.local` file run these commands in the terminal and then open localhost which will be given after deployment

```bash
 npm init
```

```bash
 npm run dev
```

