// Dynamic Component Loader
import { CONFIG } from './config.js';

export class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
        this.loadingPromises = new Map();
    }
    
    async loadComponent(componentId, containerId = null) {
        // Check if component is already loaded
        if (this.loadedComponents.has(componentId)) {
            return Promise.resolve();
        }
        
        // Check if component is currently being loaded
        if (this.loadingPromises.has(componentId)) {
            return this.loadingPromises.get(componentId);
        }
        
        const componentPath = CONFIG.COMPONENTS[componentId];
        if (!componentPath) {
            console.error(`Component path not found: ${componentId}`);
            return Promise.reject(new Error(`Component path not found: ${componentId}`));
        }
        
        const loadingPromise = this.fetchAndInsertComponent(componentId, componentPath, containerId);
        this.loadingPromises.set(componentId, loadingPromise);
        
        try {
            await loadingPromise;
            this.loadedComponents.add(componentId);
            this.loadingPromises.delete(componentId);
            this.notifyComponentLoaded(componentId);
        } catch (error) {
            this.loadingPromises.delete(componentId);
            console.error(`Failed to load component ${componentId}:`, error);
            throw error;
        }
        
        return loadingPromise;
    }
    
    async fetchAndInsertComponent(componentId, componentPath, containerId) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            const targetContainer = containerId ? 
                document.getElementById(containerId) : 
                document.getElementById(componentId);
            
            if (!targetContainer) {
                throw new Error(`Container not found: ${containerId || componentId}`);
            }
            
            targetContainer.innerHTML = html;
            
            // Execute any scripts in the loaded HTML
            this.executeScripts(targetContainer);
            
        } catch (error) {
            console.error(`Error loading component ${componentId}:`, error);
            throw error;
        }
    }
    
    executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            
            // Copy script attributes
            Array.from(script.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            
            // Copy script content
            if (script.innerHTML) {
                newScript.innerHTML = script.innerHTML;
            }
            
            // Replace the old script with the new one
            script.parentNode.replaceChild(newScript, script);
        });
    }
    
    async loadMultipleComponents(components) {
        const loadPromises = components.map(({ id, container }) => 
            this.loadComponent(id, container)
        );
        
        try {
            await Promise.all(loadPromises);
            this.notifyAllComponentsLoaded(components);
        } catch (error) {
            console.error('Error loading multiple components:', error);
            throw error;
        }
    }
    
    unloadComponent(componentId) {
        const container = document.getElementById(componentId);
        if (container) {
            container.innerHTML = '';
        }
        this.loadedComponents.delete(componentId);
        this.notifyComponentUnloaded(componentId);
    }
    
    reloadComponent(componentId, containerId = null) {
        this.unloadComponent(componentId);
        return this.loadComponent(componentId, containerId);
    }
    
    isComponentLoaded(componentId) {
        return this.loadedComponents.has(componentId);
    }
    
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }
    
    notifyComponentLoaded(componentId) {
        const event = new CustomEvent('componentLoaded', { detail: { componentId } });
        document.dispatchEvent(event);
    }
    
    notifyComponentUnloaded(componentId) {
        const event = new CustomEvent('componentUnloaded', { detail: { componentId } });
        document.dispatchEvent(event);
    }
    
    notifyAllComponentsLoaded(components) {
        const event = new CustomEvent('allComponentsLoaded', { detail: { components } });
        document.dispatchEvent(event);
    }
    
    // Load all predefined components
    async loadAllComponents() {
        const components = Object.keys(CONFIG.COMPONENTS).map(id => ({ id }));
        return this.loadMultipleComponents(components);
    }
    
    // Preload components for better performance
    async preloadComponents(componentIds) {
        const preloadPromises = componentIds.map(id => {
            const componentPath = CONFIG.COMPONENTS[id];
            if (componentPath) {
                return fetch(componentPath).catch(error => {
                    console.warn(`Failed to preload component ${id}:`, error);
                });
            }
        });
        
        await Promise.allSettled(preloadPromises);
    }
}
