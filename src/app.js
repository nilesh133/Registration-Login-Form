const express = require("express")
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 7000;
const path = require("path");
require("./db/connection");
const Register = require("../src/models/register");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("", (req, res) => {
    res.render('register');
});

app.get("/", (req, res) => {
    res.render('register');
});

app.get("/register", (req, res) => {
    res.render('register');
});

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {
            const student_det = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                phone: req.body.phone,
                email: req.body.email,
                age: req.body.age,
                password: password,
                confirmpassword: confirmpassword
            });

            const stu = await student_det.save();
            res.status(201).render("success", {
                message : "Registration",
            });
        }
        else {
            res.render("register", {
                errormessage: "Password Not Matched",
            });
        }
    } catch (error) {
        res.status(400).render("wrong");
    }
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await Register.findOne({ email: email });

        if (userEmail.password === password) {
            res.status(201).render("success", {
                message : "Login",
            });
        }
        else {
            res.render("login", {
                loginerrormessage: "Invalid Login Details",
            });
        }
    } catch (error) {
        res.status(400).render("wrong");

    }
});

app.listen(port, () => {
    console.log(`listening at port no. ${port}`)
});
