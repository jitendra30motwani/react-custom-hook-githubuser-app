import { useState, useEffect } from "react";

const UseGithubComponent = ({userName}) => {

    const [userDetail, setUserDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);

    useEffect(()=>{

        const fetchUserData = async () => {

            setLoading(true);

            try{
                const userData = await fetch(`https://api.github.com/users/${userName}`);
                const ok = userData.ok;
                setOk(ok);
                const responseUserData = await userData.json();
                setUserDetail(responseUserData);
                setLoading(false);
            }catch(error) {
                setError(error.message);
                setLoading(false);
            }

        }

        fetchUserData();

    },[userName]);

    return [userDetail,error,loading,ok];

}

export default UseGithubComponent;