export const pricing = {
	features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
	packages: [
		{
			name: 'Basic',
			price: 10,
			includedFeatures: [0, 1, 2], // Indexes of features
			featured: false
		},
		{
			name: 'Pro',
			price: 20,
			includedFeatures: [0, 1, 2, 3], // Indexes of features
			featured: true // Mark this plan as featured
		},
		{
			name: 'Enterprise',
			price: 30,
			includedFeatures: [0, 1, 2, 3, 4], // Indexes of features
			featured: false
		}
	]
};
