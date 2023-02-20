import { Component, Suspense } from 'react';
import type { ReactNode }      from 'react';
import { PageError }           from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}
	
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	
	render() {
		if (this.state.hasError) {
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			);
		}
		
		return this.props.children;
	}
}
