const express = require("express")
const router = express.Router();
import {authPass} from '..controllers/auth.controller'
import { validationSignup } from "../middlewares";

router.use((req, res, next) => {
    res.header(
        "access"
    );
    next();
});

router.post("/signup", [validationSignup]);
router.post("/signin", authPass.signin)

export default router;