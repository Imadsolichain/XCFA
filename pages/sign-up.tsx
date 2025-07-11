import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return <SignUp appearance={{ elements: { card: 'rounded-2xl shadow-xl', logoBox: 'justify-center', logoImage: 'w-16 h-16', headerTitle: 'text-[#2F5FDE] font-bold', socialButtonsBlockButton: 'bg-[#2F5FDE] text-white', formButtonPrimary: 'bg-[#2F5FDE] text-white rounded-xl', footerActionLink: 'text-[#2F5FDE] underline' }, variables: { colorPrimary: '#2F5FDE' } }} />;
} 