const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sassMiddleware = require('node-sass-middleware');

const index = require("./routes/index");
const demoRequest = require("./routes/demoRequest");
const demoConfirmation = require("./routes/demoConfirmation");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/demoRequest", demoRequest);
app.use("/demoConfirmation", demoConfirmation);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// css preprosessor
app.use(sassMiddleware({
    src: path.join(__dirname, "public", "stylesheets"),
    dest: path.join(__dirname, "public", "stylesheets"),
    debug: true,
    outputStyle: "compressed",
}), express.static(path.join(__dirname, "public")));


// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
