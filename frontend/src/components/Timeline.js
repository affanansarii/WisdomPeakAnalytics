import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Heading, Text } from "@chakra-ui/react";

function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3182CE', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #3182CE' }}
                date="2020 - Present"
                iconStyle={{ background: '#3182CE', color: '#fff' }}
            >
                <Heading size="sm">Senior Developer at XYZ Company</Heading>
                <Text>
                    Working as a full-stack developer, specializing in React and Node.js.
                </Text>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2019"
                iconStyle={{ background: '#2D3748', color: '#fff' }}
            >
                <Heading size="sm">Junior Developer at ABC Corp</Heading>
                <Text>
                    Developed and maintained web applications with JavaScript.
                </Text>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;
