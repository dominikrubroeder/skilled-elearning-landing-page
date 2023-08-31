import AnimationIcon from "../components/svg/AnimationIcon";
import DesignIcon from "../components/svg/DesignIcon";
import PhotographyIcon from "../components/svg/PhotographyIcon";
import CryptoIcon from "../components/svg/CryptoIcon";
import BusinessIcon from "../components/svg/BusinessIcon";

export interface ICourse {
  icon: JSX.Element;
  title: string;
  text: string;
  primaryActionText?: string;
}
export const coursesData: ICourse[] = [
  {
    icon: <AnimationIcon />,
    title: "Animation",
    text: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    primaryActionText: "Get started",
  },
  {
    icon: <DesignIcon />,
    title: "Design",
    text: "Design Create beautiful, usable interfaces to help shape the future of how the web looks.",
    primaryActionText: "Get started",
  },
  {
    icon: <PhotographyIcon />,
    title: "Photography",
    text: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    primaryActionText: "Get started",
  },
  {
    icon: <CryptoIcon />,
    title: "Crypto",
    text: "All you need to know to get started investing in crypto.",
    primaryActionText: "Get started",
  },
  {
    icon: <BusinessIcon />,
    title: "Business",
    text: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    primaryActionText: "Get started",
  },
];
