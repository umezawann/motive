import React, {useRef, useEffect} from "react"
import {createSvg} from './create-svg'

const userInfo = {
  isHalloween: false,
  contributionCalendar: [
    {
    contributionCount: 10,
    contributionLevel: 10,
    date: new Date(),}
  ],
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

// const svgString1 = create.createSvg(userInfo, 'season', true, node);

const Hoge = () => {
  const ref = useRef()

  useEffect(() => {
    // const svgElement = d3.select(ref.current)
    const svgString1 = createSvg(userInfo, 'season', true, ref.current);

    // const svgElement = createSvg()
    // svgElement.append("circle")
    //   .attr("cx", 150)
    //   .attr("cy", 70)
    //   .attr("r",  50)
  }, [])

  return (
    <svg
      ref={ref}
      width={300}
      height={300}
    />
  )
}
export default Hoge