import { InterviewTheme } from "../../types/interview/InterviewTheme";

interface ShowThemeProps {
    theme: InterviewTheme;
}

export const ShowTheme = ({ theme }: ShowThemeProps) => {
    return (
        <li>{theme.name}</li>
    );
};