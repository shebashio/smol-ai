export interface SPDXDocument {
  SPDXID: string;
  DataLicense: string;
  SPDXVersion: string;
  DocumentName: string;
  DocumentNamespace: string;
  Creator: string[];
  Created: string;
  Packages: Package[];
}

export interface Package {
  PackageName: string;
  PackageSPDXID: string;
  PackageVersion: string;
  PackageSupplier: string;
  PackageDownloadLocation: string;
  FilesAnalyzed: boolean;
  PackageVerificationCode: string;
  Files: File[];
}

export interface File {
  FileName: string;
  FileSPDXID: string;
  FileChecksums: Checksum[];
  LicenseConcluded: string;
  LicenseInfoInFile: string[];
  LicenseComments: string;
  ArtifactOfProjectName: string;
  ArtifactOfProjectHomePage: string;
  ArtifactOfProjectURI: string;
}

export interface Checksum {
  Algorithm: string;
  Value: string;
}