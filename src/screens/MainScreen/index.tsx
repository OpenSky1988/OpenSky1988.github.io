import React from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';
import Greetings from '../../components/Greetings/Greetings';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Contacts from '../../components/Contacts/Contacts';
import OpenProject from '../../components/OpenProject/OpenProject';

import StaticData from '../../components/StaticData';
import { IState } from '../../reducers/initialState';
import './Main.less';

interface IProps {
  project: IListItemState;
}

const SkillItem: React.FC<{ skill: ISkill }> = ({ skill }) => (
  <div
    className="skill"
    key={skill.id}
  >
    <div
      className="skill-icon"
      style={{ backgroundImage: `url("${skill.img}")` }}
    />
    <h3>{skill.name}</h3>
    <h4>{skill.description}</h4>
  </div>
);

const LinkItem: React.FC<{ link: ILink }> = ({ link }) => (
  <li
    id={link.id}
    key={link.id}>
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={link.img}
        // border="0"
        alt={link.alt}
      />
    </a>
  </li>
);

const MainScreen: React.FC<IProps> = ({ project }) => {
  const renderServices = () => StaticData.skills
    .map((skill) => <SkillItem key={skill.id} skill={skill} />);

  const renderLinks = () => StaticData.links
    .map((link) => <LinkItem key={link.id} link={link} />);

  return (
    <main>
      <Banner />
      <Greetings />
      <Services addServices={renderServices} />
      <Projects />
      <Contacts addLinks={renderLinks} />
      {
        project.open
          && <OpenProject project={project.key} />
      }
    </main>
  );
};

const mapStateToProps = (state: IState) => ({
  project: state.project.item,
});

export default connect(mapStateToProps, {})(MainScreen);
