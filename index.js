const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, console.log("server is runing"))

app.get("/", (req, res) => {
    res.send("プログラミングチュートリアルようこそ")
})

// 客戶資料放置Server
const customers = [
    { title: "Leon", id: 1} ,
    { title: "Ibo", id: 2 },
    { title: "Kathy", id: 3 },
    { title: "Phil", id: 4 },
    { title: "Roy", id: 5} ,
];

//  取得Data(GET Method)
app.get("/api/customers", (req, res) => {
    res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
    // req.params.id 請求的 URL 參數中,轉換成整數，然後與客戶對象的 id 進行比對
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer)
})

// Data 傳送(Post Mathod)
app.post("/api/customers", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1,   
    };
    customers.push(customer);
    res.send(customer);
})

// 將Data 更新(Put)
app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer)    
})

//  刪除Data (DELETE)
app.delete("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));

    const index = customers.indexOf(customer);
    customers.splice(index, 1)

    res.send(customer)    
})