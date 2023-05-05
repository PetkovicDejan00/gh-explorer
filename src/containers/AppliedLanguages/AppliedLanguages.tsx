import { useAppliedLanguages } from "../../hooks/useAppliedLanguages";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { LanguagesContainer } from "./css/Languages.styled";
import { ErrorMsg } from "../../globalCSS/globalStyle";

interface Prop {
  repository: string;
}

const AppliedLanguages = ({ repository }: Prop) => {
  const { isLoading, error, data } = useAppliedLanguages(`${repository}`);

  if (isLoading) {
    return <LoadingCircle />;
  }
  if (error instanceof Error) {
    return <ErrorMsg>{error.message}</ErrorMsg>;
  }

  const appliedLanguages = Object.entries(data?.data);
  return (
    <LanguagesContainer>
      <h2>Applied Languages</h2>
      {appliedLanguages.length ? (
        <div>
          {appliedLanguages.map((key: any, value) => {
            return (
              <p key={value}>
                {key[0]}: {key[1]}
              </p>
            );
          })}
        </div>
      ) : (
        <p>No applied languages to show</p>
      )}
    </LanguagesContainer>
  );
};

export default AppliedLanguages;
