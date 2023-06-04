import RenderUserDetailComponent from "./RenderUserDetailComponent";
import UseGithubComponent from "./hooks/UseGithubComponent";

const GithubUserComponent = (userName) => {

    const [userDetail, error, loading, ok] = UseGithubComponent(userName);

    return (

        <div className="result">

            {loading && <p> Loading... </p>}
            {error && <h1>error</h1>}
            {ok && userDetail && <RenderUserDetailComponent userDetail={userDetail}/>}

            {!ok && userDetail && <h1>{userDetail.message}</h1>}

        </div>

    );

}

export default GithubUserComponent;
