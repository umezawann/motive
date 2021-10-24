// import * as core from '@actions/core';
// import * as client from './github-graphql';
// import * as aggregate from './aggregate-user-info';
import * as create from './create-svg';
// import * as f from './file-writer';

const main = async (node: any): Promise<string> => {
  try {
    const seasonMode = false ? 'halloween' : 'green';
    const userInfo = {
      isHalloween: false,
      contributionCalendar: [{
        contributionCount: 10,
        contributionLevel: 10,
        date: new Date(),
      }],
      contributesLanguage: [{ language: 'en', color: 'green', contributions: 10}],
      totalContributions: 10,
      totalCommitContributions: 10,
      totalIssueContributions: 10,
      totalPullRequestContributions: 10,
      totalPullRequestReviewContributions: 10,
      totalRepositoryContributions: 10,
      totalForkCount: 10,
      totalStargazerCount: 10,
    };

    const svgString1 = create.createSvg(userInfo, 'season', true, node);
    return svgString1
    // f.writeFile('profile-season-animate.svg', svgString1);

    // const svgString2 = create.createSvg(userInfo, seasonMode, true);
    // f.writeFile('profile-green-animate.svg', svgString2);

    // const svgString3 = create.createSvg(userInfo, 'season', false);
    // f.writeFile('profile-season.svg', svgString3);

    // const svgString4 = create.createSvg(userInfo, seasonMode, false);
    // f.writeFile('profile-green.svg', svgString4);
  } catch (error) {
    console.error(error);
    return ''
    // core.setFailed('error');
  }
};

export default main
// void main();
