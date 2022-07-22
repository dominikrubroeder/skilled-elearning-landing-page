export interface ICourse {
  icon: string;
  title: string;
  text: string;
  primaryActionText: string;
}

export const coursesData: ICourse[] = [
  {
    icon: '/images/icon-animation.svg',
    title: 'Animation',
    text: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    primaryActionText: 'Get started',
  },
  {
    icon: '/images/icon-design.svg',
    title: 'Design',
    text: 'Design Create beautiful, usable interfaces to help shape the future of how the web looks.',
    primaryActionText: 'Get started',
  },
  {
    icon: '/images/icon-photography.svg',
    title: 'Photography',
    text: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    primaryActionText: 'Get started',
  },
  {
    icon: '/images/icon-crypto.svg',
    title: 'Crypto',
    text: 'All you need to know to get started investing in crypto.',
    primaryActionText: 'Get started',
  },
  {
    icon: '/images/icon-business.svg',
    title: 'Business',
    text: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    primaryActionText: 'Get started',
  },
];
