import { Helmet } from 'react-helmet';

import api from '~/api';
import capitalize from '~/services/capitalize';

import Main from '~/appComponents/Main';
import Loading from '~/components/Loading';
import ListOfCourseCards from '~/appComponents/ListOfCourseCards';

import css from './index.css';

class Page_courses_id extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    speGetPage: {}
  }

  componentDidMount = () => {
    this.apiGetPage();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.apiGetPage();
    }
  }

  apiGetPage = () => {
    api.PageApi.getUserPage(
      (spe) => this.setState({ speGetPage: spe }),
      { userId: this.props.match.params.id }
    );
  }

  getDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  renderUser = (user) =>
    <div className="user">
      <div className="user-details">
        <h1>Profile</h1>
        <img src={user.avatarUrl} alt="avatar"/>
        <div className="right">
          <div className="username">{capitalize(user.username)}</div>

          {
            user.email &&
            <div className="email">{user.email}</div>
          }

          <div className="created-at">
            Joined {this.getDate(user.createdAt)}
          </div>
        </div>
      </div>
    </div>

  renderSkills = (skills) => {
    const max = skills[0].nOfFlashcards;

    return <div className="skills">
      <h1>Skills</h1>
      {skills.map((skill) =>
        <div className="skill" key={skill.categoryName}>
          <h2>{skill.categoryName}</h2>

          <section className="progress-bar">
            <span className="n-of-flashcards">{skill.nOfFlashcards} flashcards</span>
            <div className="inner" style={{ width: ((skill.nOfFlashcards / max) * 100).toString() + '%' }}/>
          </section>
        </div>
      )}
    </div>;
  }

  render = () =>
    <Main className={css.main}>
      <div className="space"/>

      <Loading spe={this.state.speGetPage}>{({ user, coursesCreated, skills }) =>
        <div className="container">
          <div className="wrapper">
            {this.renderUser(user)}
            {
              skills[0] &&
              this.renderSkills(skills)
            }
          </div>

          <section className="created-courses">
            <h1>Created Courses</h1>
            <ListOfCourseCards
              className="list-of-courses"
              type="simple"
              courseDtos={coursesCreated}
            />
          </section>
          <Helmet>
            <title>{capitalize(user.username)}</title>
          </Helmet>
        </div>
      }</Loading>
    </Main>
}

export default Page_courses_id;
