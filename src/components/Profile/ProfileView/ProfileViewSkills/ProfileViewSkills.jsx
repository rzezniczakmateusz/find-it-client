import React from 'react';
import { Skills } from './ProfileViewSkillsStyles';
import { SkillsList } from './ProfileViewSkillsStyles';
import axios from 'axios';

class ProfileViewSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            skills: ['html', 'css', 'js'] 
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/users/:id')
            .then(response => {
               this.setState({ 
                    skills: response.data.skills
               })
            })
            .catch(error => {
               console.log(error);
            });
    }

    render() {
        return(
            <div>
                <Skills>Skills:</Skills>
                <SkillsList>
                    {this.state.skills.map((item, i) =>
                        <li>{item}</li>
                    )}
                </SkillsList>
            </div>
            
        )
    }

}

export default ProfileViewSkills;