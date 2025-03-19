export interface AboutPageProps {
  children: React.ReactNode
}

export const AboutFeature = ({ children }: AboutPageProps) => {
  return <div className="p-2">${children}!</div>;
};

export default AboutFeature;
