import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const LoginForm = () => {
  return (
    <main className=" max-w-xl">
      <div className="space-y-6">
        <div className="space-y-3 lg:col-span-2">
          <h2 className="text-3xl font-bold">Login</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>New to this account?</span>
            <Link href="/sign-up" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
        <RadioGroup defaultValue="hospital" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" />
            <Label htmlFor="admin">Admin</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hospital" id="hospital" />
            <Label htmlFor="hospital">Hospital</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="diagnostic" id="diagnostic" />
            <Label htmlFor="diagnostic">Diagnostic Centre</Label>
          </div>
        </RadioGroup>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input id="password" type="password" />
            <p className="text-xs text-muted-foreground">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>
          <Button className="w-full">Login</Button>
        </div>
        <div className="text-xs text-muted-foreground">
          By creating an account, you agree to our{' '}
          <Link href="#" className="text-purple-600 hover:underline">
            Terms of use
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-purple-600 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LoginForm;
