import React from 'react'

function ProjectDetails(props)  {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus facere adipisci veritatis nisi consequatur quas doloremque repudiandae ratione, voluptatem cumque nemo, ipsam consectetur praesentium, fuga earum. Labore dolore illo totam corporis suscipit possimus atque cum, amet quas quia porro debitis nostrum excepturi. Aperiam ullam natus ipsa. Autem nostrum, consequuntur aspernatur pariatur veniam veritatis accusantium explicabo numquam quisquam ex ad dolores corrupti porro qui, nihil animi quidem reiciendis labore illo harum, sed sapiente! Quaerat tempore repellendus placeat nihil explicabo, tenetur, corrupti, quasi beatae consequatur ut eaque commodi non nulla aliquam quam! Optio maiores voluptas soluta dolor quaerat eius reiciendis aut?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by EP</div>
                    <div>17 jan, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
