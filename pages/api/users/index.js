import axios from "axios";

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            const getUser = await axios.get(`http://localhost:8080/customer/membership`, {data: {"email":"mrjimtonez@gmail.com"}})
            // const getUser = await axios.get(`http://localhost:8080/customer?email=${encodeURIComponent(session.user.email)}`)
            res.status(200).json({ data: getUser.data })
        case "POST":
            const response = await axios.post(`http://localhost:8080/customer`, req.body);
            res.status(200).json({ data: response.data })
            break;
        // default:
        //     res.setHeader("Allow", ["GET", "POST"]);
        //     res.status(405).end(`Method ${req.method} Not Allowed`);
        //     break;
    }
}

// export default async (req, res) => {

//     try {
//         const response = await axios.post('http://localhost:8080/customer', {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         res.status(200).json(response)
//     } catch(e) {
//         console.log(e)
//     }
// }