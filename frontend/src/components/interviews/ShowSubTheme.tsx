import { InterviewSubTheme } from "../../types/interview/InterviewSubTheme";

interface ShowSubThemeProps {
    subTheme: InterviewSubTheme;
}

export const ShowSubTheme = ({ subTheme }: ShowSubThemeProps) => {
    return (
      <>
        <li>{subTheme.name}</li>
      </>
    );
};