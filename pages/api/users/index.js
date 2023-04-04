import axios from "axios";

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            const getUser = await axios.post(`https://route-ed-quarkus-backend-ssl-cc-betting-demo.apps.cluster-r8szc.r8szc.sandbox1991.opentlc.com/customer/membership`, { params: req.body })
            // const getUser = await axios.get(`http://localhost:8080/customer?email=${encodeURIComponent(session.user.email)}`)
            res.status(200).json({ data: getUser.data })
        // case "POST":
        //     const response = await axios.post(`https://route-ed-quarkus-backend-ssl-cc-betting-demo.apps.cluster-r8szc.r8szc.sandbox1991.opentlc.com/customer`, req.body);
        //     res.status(200).json({ data: response.data })
        //     break;
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