function getWeather(city) {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(raw => raw.json())
        .then(result => {
            console.log(result);
        });
}

getWeather("London");

// or

async function getWeather(city) {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );

    let realdata = await raw.json();
    console.log(realdata);
}

getWeather("Leh");

// or

async function getWeather(city) {
    try {
        let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

        let raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        if (!raw.ok) {
            throw new Error("City not found, find something else");
        }

        let realdata = await raw.json();

        if (realdata.main.temp < 0) {
            console.warn(`Too Cold out there... ${realdata.main.temp}°C`);
        } 
        else if (realdata.main.temp > 40) {
            console.warn(`Too Hot out there... ${realdata.main.temp}°C`);
        } 
        else {
            console.log(realdata);
        }

    } catch (err) {
        console.error(err.message);
    }
}

getWeather("Leh");



const users = [
    "anna@gmail.com",
    "emma@gmail.com",
    "denial@pakchhi.com"
];


function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5);

        setTimeout(() => {
            let probability = Math.floor(Math.random() * 10);

            if (probability <= 5) {
                resolve("Email successfully sent.");
            } else {
                reject("Email not sent..");
            }

        }, time * 300);
    });
}

async function sendEmails(userlist) {

    let allresponses = userlist.map(function (email) {
        return sendEmail(email)
            .then(function (data) {
                return data;
            })
            .catch(function (err) {
                return err;
            });
    });

    let ans = await Promise.all(allresponses);

    ans.forEach(function (status) {
        console.log(status);
    });
}

sendEmails(users);
