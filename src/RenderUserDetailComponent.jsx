

const RenderUserDetailComponent = ({ userDetail }) => {

    return (

        <div className="render-user">

            <ul>

                <li><img src={userDetail.avatar_url} alt={userDetail.login}></img></li>
                <li><strong>Name: </strong>{userDetail.name}</li>
                <li><strong>bio: </strong>{userDetail.bio ? userDetail.bio : " "}</li>
                <li><strong>Public Repos: </strong>{userDetail.public_repos ? userDetail.public_repos : 0}</li>
                <li><strong>Followers: </strong>{userDetail.followers ? userDetail.followers : 0}</li>
                <li><strong>Following: </strong>{userDetail.following ? userDetail.following : 0}</li>

            </ul>

        </div>

    );

}

export default RenderUserDetailComponent;